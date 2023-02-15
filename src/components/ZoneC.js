import { useParams } from "react-router-dom";

function ZoneC() {
 
  return (
    <div>
      <form onSubmit={'handleSubmit'}>
                <div className="zone-detail">
                    <p><h5>ZONE C</h5></p>
                    <p>
                        <h5>DESCRIPTION</h5>
                        <span>P1 is the nearest zone to the terminal (100m distance).</span>
                        <br />
                        <span>Maximum parking time: 4 hours</span>
                    </p>
                    <p>
                        <h5>SPECIFICATIONS</h5>
                        <span>Maximum parking time: 4 hourss</span>
                    </p>

                    <p style={{ border: 'none' }}>
                        <h5>AVAILABILITY</h5>

                    </p>

                    <div class="table-responsive  align-items-center justify-content-center">
                        <div>Resident Area</div>
                        <table class="table border">
                            <tbody>
                                <tr class="border">
                                    <td class="border">R01</td>
                                    <td class="border">R02</td>
                                    <td class="border">R03</td>
                                    <td class="border">R04</td>
                                    <td class="border">R05</td>
                                    <td class="border">R06</td>
                                    <td class="border">R07</td>
                                    <td class="border">R08</td>
                                    <td class="border">R09</td>
                                    <td class="border">R10</td>
                                </tr>
                                <tr>
                                    <td class="border">R11</td>
                                    <td class="border">R12</td>
                                    <td class="border">R13</td>
                                    <td class="border">R14</td>
                                    <td class="border">R15</td>
                                    <td class="border">R16</td>
                                    <td class="border">R17</td>
                                    <td class="border">R18</td>
                                    <td class="border">R19</td>
                                    <td class="border">R20</td>
                                </tr>
                            </tbody>

                        </table>
                        <div>Customer Area</div>
                        <table class="table border">
                            <tbody>
                                <tr class="border">
                                    <td class="border">C01</td>
                                    <td class="border">C02</td>
                                    <td class="border">C03</td>
                                    <td class="border">C04</td>
                                    <td class="border">C05</td>
                                    <td class="border">C06</td>
                                    <td class="border">C07</td>
                                    <td class="border">C08</td>
                                    <td class="border">C09</td>
                                    <td class="border">C10</td>
                                </tr>
                                <tr>
                                    <td class="border">C11</td>
                                    <td class="border">C12</td>
                                    <td class="border">C13</td>
                                    <td class="border">C14</td>
                                    <td class="border">C15</td>
                                    <td class="border">C16</td>
                                    <td class="border">C17</td>
                                    <td class="border">C18</td>
                                    <td class="border">C19</td>
                                    <td class="border">C20</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <button style={{width:'30%',height:'50px', borderRadius:'5px' ,color: "#fff", marginLeft:'35%', backgroundColor:'#2DC98A', border:'#2DC98A' }} type="submit">Book now</button>
                </div>

                
            </form>
    </div>
  );
}
export default ZoneC;