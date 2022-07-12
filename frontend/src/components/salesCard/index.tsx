
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../notificationButton';
import './style.css';


function SalesCard() {
    
    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());


    return (
        <div className="card-retangulo-dsmeta">
            <h2>Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
                </div>
                <div className="dsmeta-form-control-container">
                <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">

                    <thead>

                        <tr>

                            <th className="show-all">ID</th>
                            <th className="show-data">Data</th>
                            <th>Vendedor</th>
                            <th className="show-all">Visitas</th>
                            <th className="show-all">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className="show-all">#341</td>
                            <td className="show-data">09/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-all">18</td>
                            <td className="show-all">11</td>
                            <td>R$9000.00</td>
                            <td>
                            <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                            </div>
                        </td>

                        </tr>
                        <tr>
                            <td className="show-all">#341</td>
                            <td className="show-data">09/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-all">18</td>
                            <td className="show-all">11</td>
                            <td>R$9000.00</td>
                            <td>
                            <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-all">#341</td>
                            <td className="show-data">09/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-all">18</td>
                            <td className="show-all">11</td>
                            <td>R$9000.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-all">#341</td>
                            <td className="show-data">09/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-all">18</td>
                            <td className="show-all">11</td>
                            <td>R$9000.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-all">#341</td>
                            <td className="show-data">09/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-all">18</td>
                            <td className="show-all">11</td>
                            <td>R$9000.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-all">#341</td>
                            <td className="show-data">09/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-all">18</td>
                            <td className="show-all">11</td>
                            <td>R$9000.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-all">#341</td>
                            <td className="show-data">09/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-all">18</td>
                            <td className="show-all">11</td>
                            <td>R$9000.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                            </div>
                            </td>
                        </tr>
                    </tbody>


                </table>
            </div>

        </div>
    )
};

export default SalesCard;