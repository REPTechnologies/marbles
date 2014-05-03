object false

child @tags => :results do
  extends "v1/tags/show"
end

node(:more) {|n| @more }
