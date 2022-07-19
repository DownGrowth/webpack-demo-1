yarn build &&
git check out gh-pages &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git comit -m 'update' &&
git push 