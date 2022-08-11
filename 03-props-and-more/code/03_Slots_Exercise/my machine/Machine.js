class Machine extends React.Component {
	render() {
		function getNum() {
			return Math.floor(Math.random() * 3)
		};
		const num = getNum();
		const num2 = getNum();
		const num3 = getNum();
		const num4 = getNum();
		const num5 = getNum();
		const num6 = getNum();
		const num7 = getNum();
		const num8 = getNum();
		const num9 = getNum();
		const {s1,s2,s3} = this.props;
		const array = [s1, s2, s3]
		let msg
		let msg2
		let msg3
		if ( num === num2 && num === num3){
			msg = <h1>You Win!</h1>
		} else {
			msg = <h1>You lose</h1>
		}
		if ( num4 === num5 && num4 === num6){
			msg2 = <h1>You Win!</h1>
		} else {
			msg2 = <h1>You lose</h1>
		}
		if ( num7 === num8 && num7 === num9){
			msg3 = <h1>You Win!</h1>
		} else {
			msg3 = <h1>You lose</h1>
		}
		return (	

			<div>
				<h1>Slot Machine2</h1>

				<p> {array[num]} {array[num2]} {array[num3]} {msg} </p>
				<p> {array[num4]} {array[num5]} {array[num6]} {msg2} </p>
				<p> {array[num7]} {array[num8]} {array[num9]} {msg3} </p>
			</div>
		);
	}
}

//ABC AAA = win
//    BBB = win
//	  CCC = win
