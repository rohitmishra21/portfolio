import { FaPenClip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";

const ServiceData = [
    {
        icon: FaPenClip, // store the icon component reference, not JSX
        name: "Content Writing",
    },
    {
        icon: MdOutlineMailOutline,
        name: "Email Marketing",
    },
    {
        icon: FaCode,
        name: "Web design"
    },
    {
        icon: FaCameraRetro,
        name: "Photography"
    },
    {
        icon: FaVideo, // store the icon component reference, not JSX
        name: "Video Editing"
    },
    {
        icon: IoPhonePortraitOutline,
        name: "Ebook Writing"
    },
    {
        icon: IoNewspaperOutline,
        name: "Blog Posting"
    },
  
];

export default ServiceData;