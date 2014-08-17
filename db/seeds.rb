include Sprig::Helpers

all_path = Rails.root.join('db', 'seeds', "all.rb")
load all_path if File.exist?(all_path)

path = Rails.root.join('db', 'seeds', "#{Rails.env}.rb")
load path if File.exist?(path)

sprig seeds_all + seeds_env
