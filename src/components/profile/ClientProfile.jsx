import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "../../css/profiel.css";
import EditAccountButton from "../buttons/EditAccountButton";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  margin: "15px",
}));

export default function KlantProfiel({ gegevens }) {
  const clientSince = new Date(gegevens.createdAt);
  return (
    <div>
      <h1>Profile details</h1>

      <Grid container spacing={2} columns={5} className="profielgegevens">
        <Grid xs={1}>
          <Item>
            <img src={gegevens.account.imageUrl} className="profielImage"></img>
          </Item>
          <div className="center">
            <EditAccountButton id={gegevens.id} />
          </div>
        </Grid>
        <Grid xs={2}>
          <Item>
            <h3>Business</h3>
            <p className="profielTitel">Name</p>
            <p>{gegevens.account.name}</p>
            <p className="profielTitel">VAT number</p>
            <p>{gegevens.account.vatNumber}</p>
            <p className="profielTitel">Address</p>
            <p>{gegevens.account.street}</p>
            <p>
              {gegevens.account.zipcode} {gegevens.account.country}
            </p>
            <p className="profielTitel">Sector</p>
            <p>{gegevens.account.sector}</p>
            <p className="profielTitel">Customer since</p>
            <p>{clientSince.toLocaleDateString()}</p>
          </Item>
        </Grid>
        <Grid xs={2}>
          <Item>
            <h3>Contact person</h3>
            <p className="profielTitel">Firstname</p>
            <p>{gegevens.firstname}</p>
            <p className="profielTitel">Lastname</p>
            <p>{gegevens.lastname}</p>
            <p className="profielTitel">Email</p>
            <p>{gegevens.email}</p>
            <p className="profielTitel">Phone</p>
            <p>{gegevens.phoneNumber}</p>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
