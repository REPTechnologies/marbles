require 'spec_helper'

describe Organization, :type => :model do
  it "has a valid factory" do
    expect(build(:organization)).to be_valid
  end
end
