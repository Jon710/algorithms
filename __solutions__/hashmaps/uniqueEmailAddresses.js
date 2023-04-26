/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const set = new Set();

  for (let email of emails) {
    const [name, domain] = email.split("@");

    set.add(name.split("+")[0].replaceAll(".", "") + "@" + domain);
  }

  return set.size;
};
