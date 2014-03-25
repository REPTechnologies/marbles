module EventType
  extend Enumerize

  enumerize :type, in: { :presentation => 1, :networking => 2, :socializing => 3, :discussion => 4, :other => 5}, predicates: true
end
