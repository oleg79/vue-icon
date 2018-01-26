const fs = require('fs');
const path = require('path');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const ejs = require('ejs');


rollup.rollup({
    entry: path.resolve(__dirname, '../src/icon.js'),
    plugins: [
        babel(), uglify()
    ],
    globals: {
        Vue: 'Vue'
    }
}).then(function (bundle) {
    let result = bundle.generate({
        format: 'iife'
    });
    fs.writeFile(path.resolve(__dirname, '../lib/icon.min.js'), result.code, function (err) {
        console.log('icon.min.js finished')
    });

});

rollup.rollup({
    entry: path.resolve(__dirname, '../src/component.js'),
    plugins: [
        babel(), uglify()
    ]
}).then(function (bundle) {
    let result = bundle.generate({
        format: 'cjs'
    });
    fs.writeFile(path.resolve(__dirname, '../lib/component.min.js'), result.code, function (err) {
        console.log('component.min.js finished')
    });
});

ejs.renderFile(path.resolve(__dirname, '../index.ejs'), {icons: ["activity","airplay","alert-circle","alert-octagon","alert-triangle","align-center","align-justify","align-left","align-right","anchor","aperture","arrow-down-circle","arrow-down-left","arrow-down-right","arrow-down","arrow-left-circle","arrow-left","arrow-right-circle","arrow-right","arrow-up-circle","arrow-up-left","arrow-up-right","arrow-up","at-sign","award","bar-chart-2","bar-chart","battery-charging","battery","bell-off","bell","bluetooth","bold","book-open","book","bookmark","box","briefcase","calendar","camera-off","camera","cast","check-circle","check-square","check","chevron-down","chevron-left","chevron-right","chevron-up","chevrons-down","chevrons-left","chevrons-right","chevrons-up","chrome","circle","clipboard","clock","cloud-drizzle","cloud-lightning","cloud-off","cloud-rain","cloud-snow","cloud","code","codepen","command","compass","copy","corner-down-left","corner-down-right","corner-left-down","corner-left-up","corner-right-down","corner-right-up","corner-up-left","corner-up-right","cpu","credit-card","crop","crosshair","database","delete","disc","dollar-sign","download-cloud","download","droplet","edit-2","edit-3","edit","external-link","eye-off","eye","facebook","fast-forward","feather","file-minus","file-plus","file-text","file","film","filter","flag","folder-minus","folder-plus","folder","git-branch","git-commit","git-merge","git-pull-request","github","gitlab","globe","grid","hard-drive","hash","headphones","heart","help-circle","home","image","inbox","info","instagram","italic","layers","layout","life-buoy","link-2","link","linkedin","list","loader","lock","log-in","log-out","mail","map-pin","map","maximize-2","maximize","menu","message-circle","message-square","mic-off","mic","minimize-2","minimize","minus-circle","minus-square","minus","monitor","moon","more-horizontal","more-vertical","move","music","navigation-2","navigation","octagon","package","paperclip","pause-circle","pause","percent","phone-call","phone-forwarded","phone-incoming","phone-missed","phone-off","phone-outgoing","phone","pie-chart","play-circle","play","plus-circle","plus-square","plus","pocket","power","printer","radio","refresh-ccw","refresh-cw","repeat","rewind","rotate-ccw","rotate-cw","rss","save","scissors","search","send","server","settings","share-2","share","shield-off","shield","shopping-bag","shopping-cart","shuffle","sidebar","skip-back","skip-forward","slack","slash","sliders","smartphone","speaker","square","star","stop-circle","sun","sunrise","sunset","tablet","tag","target","terminal","thermometer","thumbs-down","thumbs-up","toggle-left","toggle-right","trash-2","trash","trending-down","trending-up","triangle","truck","tv","twitter","type","umbrella","underline","unlock","upload-cloud","upload","user-check","user-minus","user-plus","user-x","user","users","video-off","video","voicemail","volume-1","volume-2","volume-x","volume","watch","wifi-off","wifi","wind","x-circle","x-square","x","zap-off","zap","zoom-in","zoom-out"]}, function (err, str) {
    fs.writeFile(path.resolve(__dirname, '../index.html'), str, function (err) {
        console.log('index.html finished')
    });
});