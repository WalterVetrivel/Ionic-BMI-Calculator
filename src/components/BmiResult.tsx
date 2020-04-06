import React from 'react';
import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';

const Result: React.FC<{ calculatedBMI: number }> = ({ calculatedBMI }) => (
	<IonRow>
		<IonCol>
			<IonCard>
				<IonCardContent className='ion-text-center'>
					<h2 className='ion-margin-bottom'>Your BMI is</h2>
					<h3>{calculatedBMI.toFixed(2)}</h3>
				</IonCardContent>
			</IonCard>
		</IonCol>
	</IonRow>
);

export default Result;
