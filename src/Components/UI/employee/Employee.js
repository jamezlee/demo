import React, {Component,Fragment} from 'react';

// const Employee = ( props ) => {
//     console.log(props)
//     // let transformedIngredients = Object.keys( props.employees )
//     //     .map( igKey => {
//     //         console.log(igKey)
//     //     } )
       
//     // if (transformedIngredients.length === 0) {
//     //     transformedIngredients = <p>Please start adding ingredients!</p>;
//     // }
//     return (
//         <div >
           
//             {/* {transformedIngredients} */}
//         </div>
//     );
// };

// export default Employee;


class Employee extends Component {
    constructor(props) {
        super(props);
        
    } 
    componentDidMount () {
       // console.log(this.props)
    }

    render(){
        let employeelist = this.props.employees.map((data,i)=>{
           return <div key={data.id}>{data.employee_name}</div>
        })
        return(
            <Fragment>
                <div>
                    {employeelist}
                </div>

            </Fragment>
        )
    }
}
export default Employee ;