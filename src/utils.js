/**
 * @author emmanuelolaojo
 * @since 11/11/18
 */

/**
 * Validates the configuration object.
 *
 * @param config - configuration object
 */
const checkParams = config => {
  if (!config.container) error("container");
  if (!config.items && !config.static) error("items or static");
};


/**
 * Handles invalid configuration object
 * errors.
 *
 * @param prop - a property with a missing value
 */
const error = prop => {
  throw new Error(`Missing property '${prop}' in MagicGrid config`);
};

/**
 * Finds the shortest column in
 * a column list.
 *
 * @param cols - list of columns
 *
 * @return shortest column
 */
const getMin = cols => {
  let min = cols[0];

  for (let col of cols) {
    if (col.height < min.height) min = col;
  }

  return min;
};

export {checkParams, getMin};
