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
        <Note cont1 = "NodeJS is a framework js?" cont2 = "ReactJS is a library js?">Môn học NodeJS</Note>
    </div>
    ,document.getElementById("root"));