import React, { useEffect, useState } from 'react'
import './DataTable.css'
//jQuery libraries
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

export default function DataTable() {

    const [data,setData]=useState([])

    
        const fetchData=async ()=>{
            await fetch('https://api.covid19api.com/country/turkey?from=2021-03-01T00:00:00Z&to=2021-06-01T00:00:00Z')
            .then(response=>response.json())
            .then(item=>setData(item))
        }
 


    useEffect(()=>{
        fetchData()
        $(document).ready(function () {
            setTimeout(function(){
            $('#example').DataTable();
             } ,1000);
        });
    },[])

    console.log(data);
  return (
    <section className='datatable'>
        <div className="MainDiv">
      <div class="jumbotron text-center">
          <h3>DataTables</h3>
      </div>
      
      <div className="container">
          <table id="example" class="table responsive table-hover table-bordered">
          <thead>
            <tr>
              <th>Country</th>
              <th>CountryCode</th>
              <th>Province</th>
              <th>City</th>
              <th>CityCode</th>
              <th>Lat</th>
              <th>Lon</th>
              <th>Confirmed</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Confirmed</th>
              <th>Active</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {data.map((result) => {
            return (
             
                 <tr>
                  <td>{result.Country}</td>
                  <td>{result.CountryCode}</td>
                  <td>{result.Province}</td>
                  <td>{result.City}</td>
                  <td>{result.CityCode}</td>
                  <td>{result.Lat}</td>
                  <td>{result.Lon}</td>
                  <td>{result.Confirmed}</td>
                  <td>{result.Deaths}</td>
                  <td>{result.Recovered}</td>
                  <td>{result.Confirmed}</td>
                  <td>{result.Active}</td>
                  <td>{result.Date}</td>
                </tr>
             
            )
          })}
           
          </tbody>
        </table>
          
        </div>
      </div>
    </section>
  )
}
