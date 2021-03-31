/**
 * Challenge
 * You’re part of a distributed software team working to develop a brand new project.
 * The chief architect of the project is in California while the rest of the development team is spread across the world.
 *
 * Due to an unforeseen event, Internet went down… so the team had to build their own communication channel over a noisy analog line.
 * In order to send reliable messages, the chief architect thought to implement the following ECC (error correction code) when sending a message:
 * All the bits of a message will be sent 3 times in a row as this: original sequence 101 will be encoded as 111000111
 * The message will be sent through the noisy channel. The chief architect estimates that we can loose maximum 1 bit every 3 bits
 * Your role is to reconstitute the message and deliver it to your team. You’re told that it contains just plain ASCII text.
 * You’re also told that to reconstitute it you need to use “democratic vote” on a group of 3 bits: the majority wins. E.g. if you receive 110 -> the result bit is 1.
 * And now this is the last message that you received!
 * Please hurry to decode it since it contains important information from the chief architect about how you should build the system.
 **/
const receivedBytes = [
  76,
  178,
  226,
  91,
  75,
  9,
  85,
  147,
  102,
  82,
  194,
  97,
  155,
  100,
  171,
  77,
  201,
  86,
  78,
  162,
  115,
  45,
  210,
  178,
  55,
  67,
  77,
  85,
  217,
  162,
  74,
  196,
  100,
  141,
  213,
  84,
  141,
  154,
  243,
  43,
  34,
  164,
  86,
  149,
  28,
  77,
  213,
  142,
  151,
  28,
  147,
  149,
  198,
  209,
  53,
  149,
  137,
  79,
  38,
  99,
  149,
  199,
  113,
  143,
  37,
  155,
  74,
  162,
  76,
  141,
  205,
  145,
  155,
  18,
  85,
  46,
  184,
  177,
  155,
  66,
  235,
  151,
  69,
  165,
  73,
  195,
  12,
  89,
  197,
  38,
  141,
  229,
  18,
  91,
  83,
  20,
  59,
  100,
  117,
  139,
  19,
  17,
  142,
  202,
  147,
  150,
  226,
  118,
  51,
  20,
  82,
  53,
  157,
  108,
  58,
  168,
  211,
  149,
  213,
  154,
  57,
  168,
  213,
  151,
  84,
  105,
  38,
  146,
  100,
  90,
  164,
  89,
  53,
  226,
  211,
  155,
  44,
  139,
  155,
  76,
  225,
  155,
  41,
  164,
  37,
  152,
  145,
  79,
  23,
  146,
  45,
  168,
  85,
  47,
  104,
  178,
  86,
  163,
  118,
  154,
  146,
  206,
  133,
  196,
  100,
  153,
  149,
  21,
  153,
  210,
  81,
  78,
  211,
  12,
  87,
  89,
  53,
  83,
  75,
  178,
  50,
  162,
  84,
  44,
  164,
  153,
  151,
  84,
  178,
  58,
  168,
  211,
  142,
  194,
  78,
  90,
  202,
  181,
  38,
  164,
  82,
  150,
  234,
  86,
  77,
  173,
  117,
  57,
  232,
  213,
  47,
  82,
  89,
  135,
  34,
  146,
  149,
  149,
  21,
  153,
  184,
  148,
  155,
  84,
  84,
  153,
  156,
  202,
  54,
  173,
  22,
  86,
  200,
  110,
  58,
  200,
  149,
  87,
  85,
  140,
  55,
  42,
  149,
  141,
  198,
  221,
  54,
  203,
  105,
  87,
  105,
  43,
  137,
  152,
  76,
  47,
  23,
  14,
  151,
  29,
  169,
  149,
  179,
  100,
  55,
  26,
  219,
  70,
  165,
  10,
  150,
  212,
  93,
  87,
  27,
  75,
  77,
  162,
  102,
  53,
  154,
  228,
  78,
  166,
  225,
  137,
  162,
  148,
  79,
  88,
  140,
  87,
  77,
  14,
  54,
  196,
  214,
  54,
  169,
  46,
  150,
  194,
  206,
  53,
  226,
  155,
  139,
  45,
  172,
  69,
  165,
  12,
  150,
  53,
  82,
  151,
  42,
  164,
  150,
  169,
  83,
  151,
  42,
  234,
  39,
  77,
  161,
  51,
  36,
  81,
  154,
  152,
  165,
  55,
  98,
  115,
  54,
  212,
  158,
  47,
  69,
  163,
  149,
  150,
  230,
  55,
  67,
  50,
  91,
  42,
  202,
  90,
  201,
  150,
  146,
  148,
  161,
  87,
  56,
  209,
  77,
  156,
  162,
  86,
  155,
  117,
  45,
  179,
  46,
  57,
  146,
  206,
  74,
  148,
  145,
  78,
  181,
  161,
  77,
  201,
  102,
  150,
  233,
  30,
  142,
  211,
  164,
  87,
  66,
  78,
  142,
  165,
  42,
  90,
  167,
  76,
  151,
  20,
  227,
  70,
  171,
  97,
  70,
  165,
  9,
  47,
  37,
  28,
  153,
  154,
  139,
  89,
  181,
  98,
  79,
  72,
  213,
  69,
  173,
  166,
  90,
  210,
  182,
  54,
  198,
  101,
  54,
  186,
  116,
  57,
  165,
  99,
  150,
  197,
  137,
  41,
  162,
  148,
  153,
  216,
  81,
  91,
  43,
  19,
  141,
  201,
  142,
  153,
  153,
  43,
  77,
  153,
  166,
  153,
  184,
  155,
  75,
  40,
  162,
  89,
  170,
  165,
  151,
  27,
  116,
  153,
  216,
  204,
  53,
  154,
  238,
  42,
  195,
  12,
  141,
  186,
  75,
  79,
  76,
  235,
  153,
  212,
  211,
  78,
  178,
  90,
  74,
  201,
  12,
  55,
  18,
  106,
  79,
  76,
  75,
  91,
  34,
  235,
  135,
  19,
  34,
  53,
  197,
  19,
  142,
  178,
  140,
  150,
  178,
  84,
  53,
  151,
  145,
  155,
  22,
  165,
  90,
  146,
  158,
  47,
  68,
  102,
  77,
  179,
  138,
  89,
  204,
  142,
  57,
  167,
  118,
  57,
  203,
  106,
  42,
  203,
  105,
  147,
  68,
  82,
  70,
  157,
  166,
  50,
  148,
  97,
  150,
  29,
  44,
  143,
  53,
  163,
  87,
  88,
  158,
  79,
  89,
  161,
  151,
  77,
  21,
  155,
  29,
  178,
  146,
  201,
  36,
  152,
  173,
  166,
  85,
  153,
  75,
  151,
  102,
  139,
  87,
  18,
  227,
  90,
  213,
  26
];

const and = (a, b) => (a === '1' && b === '1' ? '1' : '0');
const or = (a, b) => (a === '1' || b === '1' ? '1' : 0);
const majority = str => {
  // found logical expression through Karnaugh mapping y = BC + AC + AB
  let [a, b, c] = str;
  return or(or(and(b, c), and(a, c)), and(a, b));
};

const decode = bytes =>
  bytes
    .map(byte => byte.toString(2).padStart(8, '0')) // convert each byte to binary
    .join('')
    .match(/.{1,3}/g) // make groups of three
    .map(group => majority(group)) // apply majority and reduce to 1
    .join('')
    .match(/.{1,8}/g) // make groups of eight bits - one for each decoded byte
    .map(item => String.fromCharCode(parseInt(item, 2))) // transform each decoded byte to decimal and convert to ASCII
    .join(''); // put the decoded characters back together

console.log(decode(receivedBytes));