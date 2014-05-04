require 'spec_helper'

describe Organization do
  it "has a valid factory" do
    expect(build(:organization)).to be_valid
  end
end
