import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

const InputControl: React.FC<{
	selectedUnits?: 'mkg' | 'ftlbs';
	onSelectUnit: (value: 'mkg' | 'ftlbs') => void;
}> = ({ selectedUnits, onSelectUnit }) => {
	const unitChangeHandler = (e: CustomEvent) => {
		onSelectUnit(e.detail.value);
	};

	return (
		<IonSegment
			value={selectedUnits ? selectedUnits : 'mkg'}
			onIonChange={unitChangeHandler}
		>
			<IonSegmentButton value='mkg'>
				<IonLabel>m/kg</IonLabel>
			</IonSegmentButton>
			<IonSegmentButton value='ftlbs'>
				<IonLabel>ft/lbs</IonLabel>
			</IonSegmentButton>
		</IonSegment>
	);
};

export default InputControl;
