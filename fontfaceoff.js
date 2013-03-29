/**
 * Font Face-Off v1.0.0
 * Generates a table which compares different sizes of Typekit fonts side by side.
 * Was originally used to test hinting sample variations of the same font family.
 * http://jonchretien.github.com/font-face-off/
 *
 * Licensed under the MIT license.
 * Copyright 2013 Jon Chretien
 */

(function() {

  'use strict';

  /**
   * Creates constructor function.
   *
   * @param {String} font - Font name.
   * @param {String} classNames - Font class names.
   * @param {Object} [options] - Optional options object passed in by constructor.
   * @constructor
   */
  function FontFaceOff(font, classNames, options) {
    // stop if arguments are not passed or Typekit is not defined
    if ( !font || !classNames || !window.Typekit ) {
      return;
    }

    // store arguments
    this.font = font;
    this.classNames = classNames.split(',');

    this.mergeConfigOptions(options);
    this.init();
  }


  /**
   * Default configuration (can be overwritten by optional options object)
   */
  FontFaceOff.prototype.defaults = {
    fontSizes: [9, 10, 11, 12, 13, 14, 16, 18, 21, 24, 30],
    lorem: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.',
    table: 'js-fontSamples'
  };


  /**
   * Merges optional config options with defaults.
   *
   * @param {Object} [options] - Optional options object passed in by constructor.
   */
  FontFaceOff.prototype.mergeConfigOptions = function(options) {
    this.options = {};

    for ( var prop in this.defaults ) {
      if ( this.defaults.hasOwnProperty(prop) ) {
        this.options[ prop ] = this.defaults[ prop ];
      }
    }

    for ( prop in options ) {
      if ( options.hasOwnProperty(prop) ) {
        this.options[ prop ] = options[ prop ];
      }
    }

    return this.options;
  };


  /**
   * Sets up variables and calls run() method.
   */
  FontFaceOff.prototype.init = function() {
    // set options
    this.fontSizes = this.options.fontSizes;
    this.lorem = this.options.lorem;
    this.classNamesLength = this.classNames.length;
    this.columnCount = this.classNamesLength;
    this.table = document.getElementById(this.options.table);

    this.run();
  };


  /**
   * Runs bulk of application behavior.
   */
  FontFaceOff.prototype.run = function() {
    this.buildTableHead();
    this.buildTableBody();
  };


  /**
   * Builds table head.
   */
  FontFaceOff.prototype.buildTableHead = function() {
    var fragment = document.createDocumentFragment(),
        thead = document.createElement('thead'),
        row = document.createElement('tr'),
        header;

    // insert empty header cell
    row.appendChild(document.createElement('th'));

    // create header cells
    for ( var i = 0; i < this.columnCount; i++ ) {
      header = document.createElement('th');
      header.className = 'column-header';
      header.scope = 'col';
      header.innerHTML = this.font + ' ' + this.classNames[i];
      fragment.appendChild(header);
    }

    // insert into DOM
    row.appendChild(fragment);
    thead.appendChild(row);
    this.table.appendChild(thead);
  };


  /**
   * Builds table body.
   */
  FontFaceOff.prototype.buildTableBody = function() {
    var fragment = document.createDocumentFragment(),
        cell,
        header,
        row,
        x,
        y;

    // create table body
    var tbody = document.createElement('tbody');

    // build rows and cells
    var len = this.fontSizes.length;
    for ( x = 0; x < len; x++ ) {
      row = document.createElement('tr');
      header = document.createElement('th');
      header.className = 'typesize';
      header.scope = 'row';
      header.innerHTML = this.fontSizes[x] + 'px';
      row.appendChild(header);

      // create data cells
      for ( y = 0; y < this.columnCount; y++ ) {
        cell = document.createElement('td');
        cell.className = 'font-sample';
        cell.innerHTML = '<p class="' + this.classNames[y] + '" style="font-size: ' + this.fontSizes[x] + 'px;">' + this.lorem + '</p>';
        row.appendChild(cell);
      }

      fragment.appendChild(row);
    }

    // insert into DOM
    tbody.appendChild(fragment);
    this.table.appendChild(tbody);

  };

  // add FontFaceOff to global namespace
  window.FontFaceOff = FontFaceOff;

})();
