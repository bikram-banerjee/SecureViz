
import propTypes from "prop-types";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export function Logout({openModal, setOpenModal}) {

    const navigate = useNavigate();
    const handleLogout = () => {
        try {
            setOpenModal(false)
           localStorage.removeItem("isLoggedIn");
           alert("Logged out successfully");
           navigate("/signin") 
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to logout?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleLogout}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


Logout.propTypes = {
  openModal: propTypes.bool,
  setOpenModal: propTypes.func
};