import Divider from "@mui/material/Divider";
import "../../../../css/admin.css"

export default function SupplierItem({ account }) {
    return (
        <>
            <h3 className="nopaddingheading">Supplier contact info</h3>
            <Divider />
            <p>Name: {account.firstname} {account.lastname}</p>
            <p>Email: {account.email}</p>
            <p>Phone: {account.phoneNumber}</p>
        </>
    );
}