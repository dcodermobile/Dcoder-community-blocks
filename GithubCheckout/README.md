# GitHub Checkout
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/6161bfe84b8721dfc690b2c1)

## Description
This block clones private and public repository from github and checkout to specific commit id/branch.

## Inputs
#### **repository**  *Text*
Repository name with owner. For example, actions/checkout
#### **ref**  *Text*
The branch, tag or SHA to checkout. When checking out the repository that triggered a workflow, this defaults to the reference or SHA for that event.  Otherwise, uses the default branch.
#### **ssh-key**  *Text*
SSH key used to fetch the repository. The SSH key is configured with the local  git config, which enables your scripts to run authenticated git commands.
      The post-job step removes the SSH key.


      We recommend using a service account with the least permissions necessary.


      [Learn more about creating and using encrypted secrets] (https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)
#### **ssh-known-hosts**  *Text*
Known hosts in addition to the user and global host key database. The public
      SSH keys for a host may be obtained using the utility `ssh-keyscan`. For example,
      `ssh-keyscan github.com`. The public key for github.com is always implicitly added.

#### **ssh-default**  *Boolean*
Whether to perform strict host key checking. When true, adds the options `StrictHostKeyChecking=yes` and `CheckHostIP=no` to the SSH command line. Use the input `ssh-known-hosts` to configure additional hosts.
#### **persist-credentials**  *Boolean*
persists the credentials
#### **path**  *Text*
Relative path under $WORKSPACE to place the repository
#### **clean**  *Boolean*
Whether to execute `git clean -ffdx && git reset --hard HEAD` before fetching
#### **fetch-depth**  *Number*
Number of commits to fetch. 0 indicates all history for all branches and tags.
#### **lfs**  *Boolean*
Whether to download Git-LFS files
#### **submodules**  *Boolean*
Whether to checkout submodules: `true` to checkout submodules or `recursive` to recursively checkout submodules.


      
When the `ssh-key` input is not provided, SSH URLs beginning with `git@github.com:` are converted to HTTPS.
#### **workspace**  *Text*
Where the project will be downloaded.
#### **ssh-strict**  *Boolean*
use ssh in strict mode

## Output

