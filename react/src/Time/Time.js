import React from 'react'

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().getHours().toLocaleString(),
            name: "Julia"
        };
       

    }

    render() {
        const time = this.state.time;
    
        return (
            <div>
            <p className="App-clock">
                Текущее время: 
                {(12<time<18)?'Good afternoon!':'Good evening!',
                 (18<time<24)? 'Good evening!!':"Good night!",
                  (0<time<6)? 'Good night!':'Good morning!',
                    (6<time<12)? 'Good morning!':'Good afternoon!'
        }
            </p>
           <p>Hello : {this.state.name}.</p>
            </div>
           
           
            
        );
    }
}

export default Time;
