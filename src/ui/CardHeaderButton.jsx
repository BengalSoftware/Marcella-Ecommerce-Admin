import { cilPlus, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCardHeader, CTooltip } from "@coreui/react";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import FlashSaleLibraryModal from "./flashSaleLibrayModal/FlashSaleLibraryModal";

const CardHeaderButton = ({ to, title }) => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation()
  
  return (
    <CCardHeader className="d-flex align-items-center justify-content-between">
      <strong className="d-flex align-items-center gap-2">
        {" "}
        <CgMenuGridO />
        {title}
      </strong>

      <div className="d-flex align-items-center">
        {
          location?.pathname === '/flashSale' && <CTooltip content="Add Existing Product">
            <CButton
              onClick={() => setShowModal(true)}
              color="primary"
              style={{
                fontSize: '11px',
                position: "relative",
                marginRight: '10px'
              }}
            >
              Add Existing Product
            </CButton>
          </CTooltip>
        }

        <FlashSaleLibraryModal setShowModal={setShowModal} showModal={showModal} />

        <CTooltip content="Create">
          <Link to={to}>
            <CButton
              color="primary"
              style={{
                height: "30px",
                width: "32px",
                position: "relative",
              }}
            >
              <CIcon icon={cilPlus} style={{ position: "absolute", top: "25%", left: "25%" }} />
            </CButton>
          </Link>
        </CTooltip>
        <CButton
          color="danger"
          className="ms-2 "
          style={{
            height: "30px",
            width: "32px",
            position: "relative",
            cursor: "not-allowed",
          }}
        >
          <CIcon icon={cilTrash} style={{ position: "absolute", top: "25%", left: "25%" }} />
        </CButton>
      </div>
    </CCardHeader>
  );
};

export default CardHeaderButton;
