
import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

import axios from "axios";


export class Statistiques extends Component {
         constructor(props) {
           super(props);
           this.state = {
             chartData: props.chartData,
           };
         }

         /*
{
               labels: [
                 "Casablanca",
                 "Fès",
                 "Salé",
                 "Tanger",
                 "Marrakech",
                 "Meknès",
                 "Rabat",
                 "Oujda",
               ],
               datasets: [
                 {
                   label: "Population",
                   data: [
                     3359818,
                     1126072,
                     982403,
                     971553,
                     928850,
                     632079,
                     577827,
                     494252,
                   ],
                   backgroundColor: [
                     "rgba(255, 99, 132, 0.6)",
                     "rgba(54, 162, 235, 0.6)",
                     "rgba(255, 206, 86, 0.6)",
                     "rgba(75, 192, 192, 0.6)",
                     "rgba(153, 102, 255, 0.6)",
                     "rgba(255, 159, 64, 0.6)",
                     "rgba(255, 99, 132, 0.6)",
                   ],
                 },
               ],
             },



             const chartData = {
                 labels, datasets: { 
                   label: "Secteur",
                   data ,
                   backgroundColor: [
                     "rgba(255, 99, 132, 0.6)",
                     "rgba(54, 162, 235, 0.6)",
                     "rgba(255, 206, 86, 0.6)",
                     "rgba(75, 192, 192, 0.6)",
                     "rgba(153, 102, 255, 0.6)",
                     "rgba(255, 159, 64, 0.6)",
                     "rgba(255, 99, 132, 0.6)",
                   ],
                }
               }
         */

         componentDidMount() {
           axios
             .get(`http://localhost:8080/statistiques/adherents/region`)
             .then((res) => {
               console.log(res.data);
               const Donnees = res.data;
               const labels = [];
               const data =[];
               Donnees.forEach((element) => {
                 labels.push(element[1]);
                 data.push(element[0]);
               });

               const chartData = {
                 labels,
                 datasets: [
                   {
                     label: "Coopératives par Region",
                     data,
                     backgroundColor: [
                       "rgba(255, 99, 132, 0.6)",
                       "rgba(54, 162, 235, 0.6)",
                       "rgba(255, 206, 86, 0.6)",
                       "rgba(75, 192, 192, 0.6)",
                       "rgba(153, 102, 255, 0.6)",
                       "rgba(255, 159, 64, 0.6)",
                       "rgba(255, 99, 132, 0.6)",
                     ],
                   },
                 ],
               };

               console.log(labels);
               console.log(data);
               this.setState({ chartData });
               console.log(chartData);
             });
         }

        

         static defaultPropos = {
           displayTitle: true,
           displayLegend: true,
           legendPosition: "right",
         };

         render() {
           return (
             <div className="chart">
               <Bar
                 data={this.state.chartData}
                 options={{
                   title: {
                     display: this.props.displayTitle,
                     text: "Population des grandes villes du Maroc",
                     fontSize: 30,
                   },
                   legend: {
                     display: this.props.displayLegend,
                   },
                 }}
               />

               <Pie
                 data={this.state.chartData}
                 options={{
                   title: {
                     display: this.props.displayTitle,
                     text: "Population des grandes villes du Maroc",
                     fontSize: 30,
                   },
                   legend: {
                     display: this.props.displayLegend,
                     position: this.props.legendPosition,
                   },
                 }}
               />

               <Line
                 data={this.state.chartData}
                 options={{
                   title: {
                     display: this.props.displayTitle,
                     text: "Population des grandes villes du Maroc",
                     fontSize: 30,
                   },
                   legend: {
                     display: this.props.displayLegend,
                   },
                 }}
               />
             </div>
           );
         }
       }

