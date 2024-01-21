import React from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  export default showToastMessage;