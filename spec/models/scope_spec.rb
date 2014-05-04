require 'spec_helper'

describe Scope do
  it "has a valid factory" do
    expect(build(:scope)).to be_valid
  end
end
