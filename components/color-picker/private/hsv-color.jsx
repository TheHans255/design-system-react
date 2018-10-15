import React from 'react';

import Swatch from './swatch';

import KEYS from '../../../utilities/key-code';
import RadioButtonGroup from '../../../components/radio-button-group';
import Radio from '../../../components/radio-button-group/radio';

const handleClick = (event, rangeIndicator, { onSaturationValueChange }) => {
	const rect = event.currentTarget.getBoundingClientRect();
	rangeIndicator.focus();
	onSaturationValueChange(event, {
		saturation: Math.round((event.clientX - rect.left) / rect.width * 100),
		value: Math.round((rect.bottom - event.clientY) / rect.height * 100),
	});
};

const handleKeyDown = (event, { onSaturationNavigate, onValueNavigate }) => {
	const keyDownCallbacks = {
		[KEYS.LEFT]: (multiplier) => {
			onSaturationNavigate(event, {
				delta: multiplier * -1,
			});
		},
		[KEYS.RIGHT]: (multiplier) => {
			onSaturationNavigate(event, {
				delta: multiplier,
			});
		},
		[KEYS.UP]: (multiplier) => {
			onValueNavigate(event, {
				delta: multiplier,
			});
		},
		[KEYS.DOWN]: (multiplier) => {
			onValueNavigate(event, {
				delta: multiplier * -1,
			});
		},
	};

	if (keyDownCallbacks[event.keyCode]) {
		event.preventDefault();
		keyDownCallbacks[event.keyCode](event.shiftKey ? 10 : 1);
	}
};

const selectedStyle = {
	border: '1px solid #9e9e9e',
	boxShadow: 'rgb(117, 112, 112) 1px 1px 1px',
	marginRight: '2px'
}

const unselectedStyle = {
	border: '1px solid #9e9e9e',
	marginRight: '2px'
}

const SWATCH_BORDER = '1px solid #9e9e9e';
const SWATCH_BORDER_SHADOW = 'rgb(117, 112, 112) 1px 1px 1px';

class HsvColor extends React.Component {
	static displayName = 'SLDSHsvColor';

	handleSwatchChange = (event) => {
		this.setState({
			isTransparentSelected: event.target.value === ''
		});
		this.props.onSwatchChange(event);
	}

	render() {
		const style = { border: 'none', 'borderRadius': 'unset' };
		let swatchStyle;
		let transparentSwatchStyle;

		if (this.props.color.hex === '') {
			transparentSwatchStyle = { ...selectedStyle };
			swatchStyle = { ...unselectedStyle };
		} else {
			transparentSwatchStyle = { ...unselectedStyle };
			swatchStyle = { ...selectedStyle };
		}

		return (
			<div>
				<p
					className="slds-assistive-text"
					id={`color-picker-instructions-${this.props.id}`}
				>
					{this.props.assistiveText.saturationValueGrid}
				</p>
				<div
					className="slds-color-picker__custom-range"
					style={{
						background: `hsl(${this.props.color.hsv.hue}, 100%, 50%)`,
					}}
					onClick={(event) => {
						handleClick(event, this.rangeIndicator, {
							onSaturationValueChange: this.props.onSaturationValueChange,
						});
					}}
					role="presentation"
				>
					{/* eslint-disable jsx-a11y/anchor-has-content */}
					<a
						aria-atomic="true"
						aria-describedby={`color-picker-instructions-${this.props.id}`}
						aria-live="assertive"
						className="slds-color-picker__range-indicator"
						onKeyDown={(event) => {
							handleKeyDown(event, { ...this.props });
						}}
						ref={(rangeIndicator) => {
							this.rangeIndicator = rangeIndicator;
						}}
						role="button"
						style={{
							bottom: `${this.props.color.hsv.value}%`,
							left: `${this.props.color.hsv.saturation}%`,
						}}
						tabIndex={0}
					/>
				</div>
				<div className="slds-color-picker__hue-and-preview">
					<label
						className="slds-assistive-text"
						htmlFor={`color-picker-input-range-${this.props.id}`}
					>
						{this.props.assistiveText.hueSlider}
					</label>
					<input
						type="range"
						min="0"
						max="360"
						className="slds-color-picker__hue-slider"
						id={`color-picker-input-range-${this.props.id}`}
						value={this.props.color.hex !== '' ? this.props.color.hsv.hue : this.props.previousColor.hsv.hue}
						onChange={this.props.onHueChange}
					/>
					<RadioButtonGroup
						style={style}
						onChange={this.handleSwatchChange}
					>
						<Radio label="Working color" style={swatchStyle} variant="swatch" key="working-color" value={this.props.color.hex !== '' ? this.props.color.hex : this.props.previousColor.hex} checked={this.props.color.hex !== ''} />
						<Radio label="Transparent" style={transparentSwatchStyle} variant="swatch" key="transparent" value='' checked={this.props.color.hex === ''} />
					</RadioButtonGroup>
				</div>
			</div>
		);
	}
}

export default HsvColor;
