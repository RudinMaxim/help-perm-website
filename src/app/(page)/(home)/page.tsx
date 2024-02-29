import { Feature, Heroes, HowHelp, Problem } from './module';

export default function Home(): React.JSX.Element {
	return (
		<main>
			<Heroes />
			<Feature />
			<Problem />
			<HowHelp />
		</main>
	);
}
