deploy:
	rm versions.json || true
	rm -r versioned_docs || true
	npm run docusaurus docs:version 1.0.0
#	npm run build
#	netlify deploy -d build -p -s baselinehq-docs