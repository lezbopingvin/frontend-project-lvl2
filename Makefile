install:
	npm install

gendiff:
	node bin/gendiff.js

publish:
	npm publish --dry-run

link:
	sudo npm link

lint:
	npx eslint .

.PHONY: test
