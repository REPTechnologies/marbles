require 'spec_helper'

describe Package, :type => :model do
  it "has a valid factory" do
    expect(build(:package)).to be_valid
  end
end
