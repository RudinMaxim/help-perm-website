import { Feature, Heroes } from './module';

export default function Home(): React.JSX.Element {
	return (
		<main>
			<Heroes />
			<Feature />
		</main>
	);
}
