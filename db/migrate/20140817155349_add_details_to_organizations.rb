class AddDetailsToOrganizations < ActiveRecord::Migration
  def change
    add_column :organizations, :description, :text
    add_column :organizations, :contact_info, :text
  end
end
