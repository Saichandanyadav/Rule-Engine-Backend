class Node {
    constructor(type, left = null, right = null, value = null) {
      this.type = type;
      this.left = left;
      this.right = right;
      this.value = value;
    }
  }
  
  const create_rule = (ruleString) => {
    
    return new Node("dummy"); 
  };
  
  const evaluate_rule = (astRoot, data) => {
    
    return true; 
  };
  
  const combine_rules = (rules) => {
    
    return new Node("dummy"); 
  };
  
  module.exports = { create_rule, evaluate_rule, combine_rules };
  