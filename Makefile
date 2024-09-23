install:
	npm ci

brain-games:
	node bin/brain-games

publish:
	npm publish --dry-run

lint:
	npx eslint

even:
	node bin/brain-even

calc:
	node bin/brain-calc

gcd:
	node bin/brain-gcd

progression:
	node bin/brain-progression

prime:
	node bin/brain-prime