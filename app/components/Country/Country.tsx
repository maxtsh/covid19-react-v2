import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "rsuite/Button";
import Modal from "rsuite/Modal";
import Flag from "react-country-flag";
import { Grid, Item } from "./styles";
import type { Country } from "containers/Home/types";

interface CountryProps {
  data: Country;
}

const Country: React.FC<CountryProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<string | undefined>("");
  const handleOpen = (value: string) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Link key={data.ID} to={`/country/${data.Country}`}>
      <Item key={data.ID}>
        <div className="item-header">
          <Flag
            className="item-header-emoji"
            countryCode={data.CountryCode}
            aria-label={data.Country}
            svg
          />
          <h3 className="item-header-slug">{data.CountryCode}</h3>
        </div>
        <div className="item-body">
          <h5 className="item-body-country">{data.Country}</h5>
          <h5 className="item-body-stats item-body-case">
            <span className="item-body-stats-title">Total Cases:</span>{" "}
            {data.TotalConfirmed}
          </h5>
          <h5 className="item-body-stats item-body-death">
            <span className="item-body-stats-title">Total Deaths:</span>{" "}
            {data.TotalDeaths}
          </h5>
          <h5 className="item-body-stats item-body-rec">
            <span className="item-body-stats-title">Total Recovered:</span>{" "}
            {data.TotalRecovered}
          </h5>
          <h5 className="item-body-stats item-body-new">
            <span className="item-body-stats-title">+ New Cases:</span>{" "}
            {data.NewConfirmed}
          </h5>
        </div>
        <div className="modal-container">
          <Button size="md" onClick={() => handleOpen("md")}>
            Medium
          </Button>
          <Modal size={size || "md"} open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1>Hello</h1>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} appearance="primary">
                Ok
              </Button>
              <Button onClick={handleClose} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Item>
    </Link>
  );
};

export default Country;
