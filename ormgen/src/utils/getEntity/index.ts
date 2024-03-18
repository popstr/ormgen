import { Entity, Entity$ } from '~/modelling';

export function getEntity(name: string, entities: Entity[]) {
	return entities.find((entity) => {
		return entity.name === name;
	});
}

getEntity.safe = (name: string, entities: Entity[]) => {
	const entity = getEntity(name, entities);

	if (!entity) {
		throw new Error(`Entity not found: ${name}`);
	}

	return entity;
};

export function getEntity$(name: string, entities: Entity$[]) {
	return entities.find((entity) => {
		return entity.source.name === name;
	});
}

getEntity$.safe = (name: string, entities: Entity$[]) => {
	const entity = getEntity$(name, entities);

	if (!entity) {
		throw new Error(`Entity not found: ${name}`);
	}

	return entity;
};
