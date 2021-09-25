import React, { useState, useEffect } from 'react';
import {
  InputGroup, FormControl, Button, Container, Row, Col, Spinner, Table,
  Alert,
} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { setResponsable, getResponsables, updateResponsable } from '../../redux/responsables/actions';

function EverGreenFinancial() {
  const dispatch = useDispatch();
  const {
    succesReqResponsable, showLoader, updatedResponsable: statusUpdate,
    responsables: {
      data = [],
    } = {},
  } = useSelector(({ responsables }) => responsables);
  const [responsableName, setResponsableName] = useState('');
  const [updatedResponsable, setupdatedResponsable] = useState('');
  const [updateInput, setupdateInput] = useState({});
  const handleUpdate = ({ target: { value } }) => setupdatedResponsable(value);
  const handleChange = ({ target: { value } }) => setResponsableName(value);
  useEffect(() => {
    dispatch(getResponsables());
  }, [succesReqResponsable, statusUpdate]);

  return (
    <Container>
      <Row>
        <Col lg="6" md="6">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Nombre completo del responsable"
              aria-label="Nombre completo del responsable"
              aria-describedby="basic-addon2"
              value={responsableName}
              onChange={handleChange}
            />
            <Button
              variant="outline-secondary"
              onClick={() => dispatch(setResponsable(responsableName))}
              disabled={!responsableName.length}
            >
              Agregar
            </Button>
            {showLoader && <Spinner animation="grow" />}
            {succesReqResponsable && (
            <Alert variant="success">
              se ha agregado correctamente
            </Alert>
            )}
          </InputGroup>
          <Table striped bordered hover>
            <thead>
              <tr>
                {Object.keys(data[0] || [])
                  .map((propertie) => (<th key={uuidv4()}>{propertie}</th>))}
              </tr>
            </thead>
            <tbody>
              {(data || []).map(({ id, nombreCompleto }) => (
                <tr key={uuidv4()}>
                  <td>
                    {id}
                  </td>
                  <td>
                    {nombreCompleto}
                  </td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      onClick={() => setupdateInput({ id, nombreCompleto })}
                    >
                      modificar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        {updateInput.nombreCompleto && (
        <Col md="6" xl="6">
          <FormControl
            aria-label="Nombre completo del responsable"
            aria-describedby="basic-addon2"
            placeholder={updateInput.nombreCompleto}
            value={updatedResponsable}
            onChange={handleUpdate}
          />
          <Button
            variant="outline-secondary"
            onClick={() => dispatch(updateResponsable({
              id: updateInput.id,
              nombreCompleto: updatedResponsable,
            }))}
            disabled={!updatedResponsable.length}
          >
            {`Actualizar ${updateInput.nombreCompleto} a ${updatedResponsable}`}

          </Button>
          {statusUpdate && (
            <Alert variant="success">
              se ha actualizado correctamente
            </Alert>
          )}
        </Col>
        )}
      </Row>
    </Container>

  );
}

export default EverGreenFinancial;
