import { Dashboard } from "@mui/icons-material";
import MedicationIcon from "@mui/icons-material/Medication";
import AccessibleIcon from "@mui/icons-material/Accessible";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PersonIcon from "@mui/icons-material/Person";
import StarsIcon from "@mui/icons-material/Stars";

export const Routes = [
    {
        text: "Dasboard",
        route: "dashboard",
        icon: <Dashboard style={{ color: "#000000" }} />,
    },
    {
        text: "Home",
        route: "home",
        icon: <MedicationIcon style={{ color: "#000000" }} />,
    },
    {
        text: "Analytics",
        route: "analytic",
        icon: <AccessibleIcon style={{ color: "#000000" }} />,
    },
    {
        text: "About",
        route: "about",
        icon: <AccessibleIcon style={{ color: "#000000" }} />,
    },
    {
        text: "Setting",
        route: "setting",
        icon: <BookOnlineIcon style={{ color: "#000000" }} />,
    },
];
