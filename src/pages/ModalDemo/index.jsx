import { useRef, useState } from "react";
import Modal from "../../components/Modal";

function ModalDemo() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [animOpen, setAnimOpen] = useState(false);
  const [noOverlayClose, setNoOverlayClose] = useState(false);
  const [noEscClose, setNoEscClose] = useState(false);
  const [customStyleOpen, setCustomStyleOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const modalRef = useRef(null);

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="font-bold">1. Basic Modal</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setBasicOpen(true)}
        >
          Mở Basic
        </button>
        <Modal isOpen={basicOpen} onRequestClose={() => setBasicOpen(false)}>
          <div className="p-2">
            <h3 className="text-2xl font-bold mb-2">Basic Modal</h3>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => setBasicOpen(false)}
            >
              Đóng
            </button>
          </div>
        </Modal>
      </div>

      <div>
        <h2 className="font-bold">2. Modal với Animation</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setAnimOpen(true)}
        >
          Mở Animation
        </button>
        <Modal
          isOpen={animOpen}
          onRequestClose={() => setAnimOpen(false)}
          closeTimeoutMS={300}
          className="modal-anim"
          onAfterOpen={() => {
            console.log("Modal mở");
          }}
          onAfterClose={() => {
            console.log("Modal đóng");
          }}
        >
          <div className="p-4 space-y-5">
            <h1 className="text-4xl font-bold mb-2">Modal Animation</h1>
            <p>Đóng modal sẽ có hiệu ứng.</p>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => setAnimOpen(false)}
            >
              Đóng
            </button>
          </div>
        </Modal>
      </div>

      <div>
        <h2 className="font-bold">3. Không đóng khi click overlay</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setNoOverlayClose(true)}
        >
          Mở Modal
        </button>
        <Modal
          isOpen={noOverlayClose}
          onRequestClose={() => setNoOverlayClose(false)}
          shouldCloseOnOverlayClick={false}
        >
          <div className="p-4 space-y-5">
            <h1 className="text-4xl font-bold mb-2">
              Không đóng khi click overlay
            </h1>
            <p>Không đóng khi click overlay.</p>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => setNoOverlayClose(false)}
            >
              Đóng
            </button>
          </div>
        </Modal>
      </div>

      <div>
        <h2 className="font-bold">4. Không đóng khi nhấn ESC</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setNoEscClose(true)}
        >
          Mở Modal
        </button>
        <Modal
          isOpen={noEscClose}
          onRequestClose={() => setNoEscClose(false)}
          shouldCloseOnEsc={false}
        >
          <div className="p-4">
            <h3 className="font-bold mb-2">Không đóng bằng ESC</h3>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => setNoEscClose(false)}
            >
              Đóng
            </button>
          </div>
        </Modal>
      </div>

      <div>
        <h2 className="font-bold">5. Custom className</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCustomStyleOpen(true)}
        >
          Mở Modal
        </button>
        <Modal
          isOpen={customStyleOpen}
          onRequestClose={() => setCustomStyleOpen(false)}
          className="bg-yellow-100 p-6 rounded-xl shadow-lg"
          overlayClassName="bg-black/50 fixed inset-0 flex items-center justify-center"
        >
          <div>
            <h3 className="font-bold mb-2">Custom Style Modal</h3>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => setCustomStyleOpen(false)}
            >
              Đóng
            </button>
          </div>
        </Modal>
      </div>

      <div>
        <h2 className="font-bold">6. Callbacks (onAfterOpen / onAfterClose)</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCallbackOpen(true)}
        >
          Mở Modal
        </button>
        <Modal
          isOpen={callbackOpen}
          onRequestClose={() => setCallbackOpen(false)}
          onAfterOpen={() => console.log("Modal đã mở")}
          onAfterClose={() => console.log("Modal đã đóng")}
        >
          <div className="p-4">
            <h3 className="font-bold mb-2">Modal với Callbacks</h3>
            <p>Mở console để xem log khi mở/đóng.</p>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => setCallbackOpen(false)}
            >
              Đóng
            </button>
          </div>
        </Modal>
      </div>
      <div>
        <h2 className="font-bold">7. Modal useRef forwardRef</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => modalRef.current.open()}
        >
          Mở Modal
        </button>
        <Modal
          ref={modalRef}
          onRequestClose={() => modalRef.current.close()}
          onAfterOpen={() => console.log("Modal đã mở")}
          onAfterClose={() => console.log("Modal đã đóng")}
        >
          <div className="p-4">
            <h3 className="font-bold mb-2">
              Modal với Modal useRef forwardRef
            </h3>
            <p>Mở console để xem log khi mở/đóng.</p>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => modalRef.current.close()}
            >
              Đóng
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default ModalDemo;
