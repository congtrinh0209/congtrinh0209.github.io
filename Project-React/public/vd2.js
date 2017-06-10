class Note extends React.Component{
    render(){
        return (
            <div>
                {this.props.cont1}<br/>
                {this.props.cont2}<br/>
                {this.props.children}
            </div>
        )
    }
}
class Note2 extends React.Component{
    render(){
        return (
            <div>
                <p>Nội dung Note2</p>
            </div>
        )
    }
}
//
ReactDOM.render(
    <div>
        <Note cont1 = "NodeJS là cái quái gì?" cont2 = "ReactJS là cái quái gì?">Môn học NodeJS</Note>
    </div>
    ,document.getElementById("root"));