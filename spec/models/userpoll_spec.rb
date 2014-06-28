require 'rails_helper'

describe Userpoll, :type => :model do
  it "has a valid factory" do
    expect(build(:userpoll)).to be_valid
  end
end
