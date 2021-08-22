import React from 'react';

import { Bar } from 'react-chartjs-2';


class Displayer extends React.Component {
    constructor(props) {
        super(props);
    }
     
    render() {
        var data;
        const data_obj = JSON.parse(this.props.data);
        const orig_obj = JSON.parse(this.props.original);
        // console.log(data_obj);
        if (data_obj){
            data = {
                labels: Object.keys(data_obj["distribution"]),
                datasets: [
                    {
                        label: 'Filtered Proportion',
                        data: Object.values(data_obj["distribution"]),
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        backgroundColor: 'rgba(120,150,255,1)',
                    },
                    {
                        label: 'Unfiltered Proportion',
                        data: Object.values(orig_obj["distribution"]),
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        backgroundColor: 'rgba(170,170,170,1)',
                    }
                ]
    
            }
        }
        else {
            data = {};
        }
        

        console.log(this.state);
        return(<div className="ChartBox">
            <Bar data={data}
                options={{
                    title:{
                    display:true,
                    text:'Proportion of Accidents',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}/>
        </div>);
    } 

}

export default Displayer;