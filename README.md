# Node Hanger

Simple node project to that may help to figure out why jasmine-node (1.0.20) is hanging on spec.

### Repro

    % git clone git@github.com:bunnymatic/node-hanger.git nodehanger
    % cd nodehanger
    % npm install
    % node_modules/jasmine-node/bin/jasmine-node --forceexit spec

... wait for it ... wait for it ...

 * distillations.2rye.com
 * github.com/bunnymatic

### Fix

It appears that a fix has been merged in sometime before v 1.0.24.   You need to add the --forceexit on the commandline when you run the spec.
I've updated the package.json and now this bug not show it's face.

