import React, { useState, useRef } from 'react';
import {
	IonApp,
	IonHeader,
	IonContent,
	IonToolbar,
	IonTitle,
	IonItem,
	IonLabel,
	IonInput,
	IonGrid,
	IonRow,
	IonCol,
	IonAlert,
} from '@ionic/react';

import BmiResult from './components/BmiResult';
import BmiControls from './components/BmiControls';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import InputControl from './components/InputControl';

const App: React.FC = () => {
	const [BMI, setBMI] = useState<number>(0);
	const [error, setError] = useState<string>('');
	const [calcUnits, setCalcUnits] = useState<'mkg' | 'ftlbs'>('mkg');

	const heightInputRef = useRef<HTMLIonInputElement>(null);
	const weightInputRef = useRef<HTMLIonInputElement>(null);

	const calculateBMI = () => {
		const enteredHeight = heightInputRef.current!.value;
		const enteredWeight = weightInputRef.current!.value;

		if (
			!enteredHeight ||
			!enteredWeight ||
			+enteredHeight <= 0 ||
			+enteredWeight <= 0
		) {
			setError('Please enter valid (positive) values for height and weight.');
			return;
		}

		const heightConversionFactor = calcUnits === 'ftlbs' ? 3.28 : 1;
		const weightConversionFactor = calcUnits === 'ftlbs' ? 2.2 : 1;

		const height = +enteredHeight / heightConversionFactor;
		const weight = +enteredWeight / weightConversionFactor;

		const bmi = weight / (height * height);

		setBMI(bmi);
	};

	const reset = () => {
		heightInputRef.current!.value = null;
		weightInputRef.current!.value = null;
		setBMI(0);
	};

	const changeCalcUnitsHandler = (val: 'mkg' | 'ftlbs') => {
		setCalcUnits(val);
	};

	return (
		<React.Fragment>
			<IonAlert
				isOpen={!!error}
				onWillDismiss={() => setError('')}
				message={error}
				translucent
				buttons={['Okay']}
				header='Error'
				animated
			/>

			<IonApp>
				<IonHeader>
					<IonToolbar>
						<IonTitle>BMI Calculator</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className='ion-padding'>
					<IonGrid>
						<IonRow>
							<IonCol>
								<InputControl
									selectedUnits={calcUnits}
									onSelectUnit={changeCalcUnitsHandler}
								/>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
								<IonItem>
									<IonLabel position='floating'>
										Enter height (in {calcUnits === 'mkg' ? 'm' : 'ft'})
									</IonLabel>
									<IonInput type='number' ref={heightInputRef}></IonInput>
								</IonItem>
							</IonCol>
							<IonCol>
								<IonItem>
									<IonLabel position='floating'>
										Enter weight (in {calcUnits === 'mkg' ? 'kg' : 'lbs'})
									</IonLabel>
									<IonInput type='number' ref={weightInputRef}></IonInput>
								</IonItem>
							</IonCol>
						</IonRow>

						<BmiControls onCalculate={calculateBMI} onReset={reset} />

						{BMI !== 0 && <BmiResult calculatedBMI={BMI} />}
					</IonGrid>
				</IonContent>
			</IonApp>
		</React.Fragment>
	);
};

export default App;
