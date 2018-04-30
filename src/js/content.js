
import $ from 'jquery'
import URL from 'url-parse'


async function main () {

  let removed = 0;

  $('a[href^="http://jump.5ch.net/?"]').each(function () {
    let href = new URL($(this).attr('href'));
    let jumpTo = href.query.replace(/\?/, '');
    if (!/^https?:/.test(jumpTo)) {
      jumpTo = '//' + jumpTo;
    }
    $(this).attr('href', jumpTo);
    $(this).attr('target', '_blank');
    removed++;
  });

  console.log('Removed: ' + removed);
}


console.log('unjump5ch');

main();
