import pcssImport from 'postcss-import';
import cssNext from 'postcss-cssnext';
import browsserReporter from 'postcss-browser-reporer';

export default {
  plugins: [
    pcssImport({}),
    cssNext({}),
    browsserReporter({}),
  ]
}
