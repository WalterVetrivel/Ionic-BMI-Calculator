import React from 'react';
import {
	IonRow,
	IonCol,
	IonButton,
	IonIcon,
	IonRippleEffect,
} from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const BmiControls: React.FC<{
	onCalculate: () => void;
	onReset: () => void;
}> = ({ onCalculate, onReset }) => (
	<IonRow>
		<IonCol className='ion-text-center'>
			<IonButton
				size='large'
				className='ion-activatable ripple-parent'
				onClick={onCalculate}
			>
				<IonIcon slot='start' icon={calculatorOutline} />
				Calculate BMI
				<IonRippleEffect />
			</IonButton>
			<IonButton
				size='large'
				fill='outline'
				color='dark'
				className='ion-activatable ripple-parent'
				onClick={onReset}
			>
				<IonIcon slot='start' icon={refreshOutline} />
				Clear
				<IonRippleEffect />
			</IonButton>
		</IonCol>
	</IonRow>
);

export default BmiControls;
