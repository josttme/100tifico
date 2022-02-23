import getData from '../utils/getData';

const Home = async () => {
	const characters = await getData();
	const view = /* html */ `
<div class="Characters">
  ${characters.results
			.map(
				chararter => /* html */ `
        <article class="Characters-item">
          <a href="#/${chararter.id}">
            <img src="${chararter.image}" alt="${chararter.name}">
            <h2>${chararter.name}</h2>
          </a>
        </article>
        `
			)
			.join('')}
</div>
`;
	return view;
};

export default Home;
