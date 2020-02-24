import React from 'react';

import IconSettings from '~/components/icon-settings';
import Tooltip from '~/components/tooltip'; // `~` is replaced with design-system-react at runtime

class Example extends React.Component {
	static displayName = 'TooltipFlippedExample';

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<div
					style={{
						width: '300px',
						height: '200px',
						overflowY: 'scroll',
						border: '1px solid black',
					}}
				>
					<Tooltip
						align="top"
						isOpen={true}
						content="Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi."
						triggerStyle={{
							textAlign: 'center',
						}}
					>
						<span>Example content</span>
					</Tooltip>
				</div>
			</IconSettings>
		);
	}
}

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
